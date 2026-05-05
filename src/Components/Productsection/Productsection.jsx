import React, { useState } from "react";
import {
    Users,
    Briefcase,
    Megaphone,
    Rocket,
} from "lucide-react";

import HRSection from "./HRSection";
import CRMSection from "./CRMSection";
import MarketingSection from "./MarketingSection";
import CampaignsSection from "./CampaignsSection";

const Productsection = () => {
    const [activeTab, setActiveTab] = useState("hr");

    const tabs = [
        { id: "hr", label: "HR", icon: Users },
        { id: "crm", label: "CRM", icon: Briefcase },
        { id: "marketing", label: "Marketing", icon: Megaphone },
        { id: "campaigns", label: "Campaigns", icon: Rocket },
    ];

    const tabContent = {
        hr: <HRSection />,
        crm: <CRMSection />,
        marketing: <MarketingSection />,
        campaigns: <CampaignsSection />,
    };

    return (
        <div className="w-full bg-white">
            {/* floating toggle bar */}
            <div className="sticky top-4 z-50 w-full px-4">
                <div className="max-w-[1440px] mx-auto flex justify-center">
                    <div className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-md p-1.5 border border-slate-200 shadow-xl">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                            ? "bg-indigo-600 text-white shadow-md"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="pt-8 animate-in fade-in duration-500">
                {tabContent[activeTab]}
            </div>
        </div>
    );
};

export default Productsection;