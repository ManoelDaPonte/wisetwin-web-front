"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { useCookiePreferences } from "../lib/hooks/useCookiePreferences";
import { CookiePreferences } from "@/lib/types";

const COOKIE_CATEGORIES = [
	{
		id: "necessary",
		title: "Cookies nécessaires",
		description:
			"Ces cookies sont indispensables au fonctionnement du site",
		required: true,
	},
	{
		id: "analytics",
		title: "Cookies analytiques",
		description:
			"Nous aident à comprendre comment vous utilisez notre site",
		required: false,
	},
	{
		id: "marketing",
		title: "Cookies marketing",
		description:
			"Permettent de vous proposer des publicités personnalisées",
		required: false,
	},
	{
		id: "preferences",
		title: "Cookies de préférences",
		description: "Permettent de mémoriser vos préférences de navigation",
		required: false,
	},
] as const;

export default function CookieConsent() {
	const [isOpen, setIsOpen] = useState(false);
	const { preferences, savePreferences } = useCookiePreferences();

	useEffect(() => {
		const hasExistingPreferences =
			localStorage.getItem("cookie_preferences");
		setIsOpen(!hasExistingPreferences);
	}, []);

	const handleAcceptAll = () => {
		const allAccepted = {
			necessary: true,
			analytics: true,
			marketing: true,
			preferences: true,
		};
		savePreferences(allAccepted);
		setIsOpen(false);
	};

	const handleSavePreferences = () => {
		savePreferences(preferences);
		setIsOpen(false);
	};

	const handleToggle = (category: keyof CookiePreferences) => {
		if (category === "necessary") return; // Empêcher la modification des cookies nécessaires

		savePreferences({
			...preferences,
			[category]: !preferences[category],
		});
	};

	// Fonction pour réafficher la bannière
	const reopenConsent = () => setIsOpen(true);

	// Exposer la fonction globalement pour permettre sa réutilisation
	useEffect(() => {
		(window as any).reopenCookieConsent = reopenConsent;
		return () => {
			delete (window as any).reopenCookieConsent;
		};
	}, []);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
			<div className="bg-card text-card-foreground rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				<div className="p-6">
					<h2 className="text-2xl font-bold mb-4">
						Paramètres des cookies
					</h2>
					<p className="mb-6">
						Nous utilisons différents types de cookies pour
						optimiser votre expérience sur notre site. Veuillez
						sélectionner vos préférences pour chaque catégorie.
					</p>

					<div className="space-y-6">
						{COOKIE_CATEGORIES.map(
							({ id, title, description, required }) => (
								<div key={id} className="border-b pb-4">
									<div className="flex items-center justify-between mb-2">
										<div>
											<h3 className="font-semibold">
												{title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{description}
											</p>
										</div>
										<Switch
											checked={
												preferences[
													id as keyof CookiePreferences
												]
											}
											onCheckedChange={() =>
												handleToggle(
													id as keyof CookiePreferences
												)
											}
											disabled={required}
										/>
									</div>
								</div>
							)
						)}
					</div>

					<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
						<button
							onClick={handleSavePreferences}
							className="px-6 py-2 rounded bg-secondary text-black hover:opacity-90 transition-colors"
						>
							Enregistrer mes choix
						</button>
						<button
							onClick={handleAcceptAll}
							className="px-6 py-2 rounded bg-primary text-white hover:opacity-90 transition-colors"
						>
							Tout accepter
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
