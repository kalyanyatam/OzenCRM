import React from 'react';
import { UserPlus, BarChart2, Zap, Mail, LineChart, Users } from 'lucide-react';

const features = [
  {
    icon: <UserPlus className="w-5 h-5 text-indigo-500" />,
    title: "Lead Management",
    description: "Capture and track high-intent leads automatically across all digital channels."
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-emerald-500" />,
    title: "Pipeline Tracking",
    description: "Visualize your deal flow with intuitive boards and real-time movement alerts."
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks with trigger-based sequences and logic-driven rules."
  },
  {
    icon: <Mail className="w-5 h-5 text-rose-500" />,
    title: "Email Integration",
    description: "Connect your inbox directly to track conversations and automate follow-ups."
  },
  {
    icon: <LineChart className="w-5 h-5 text-teal-500" />,
    title: "Real-time Analytics",
    description: "Data-driven insights to help you identify bottlenecks and forecast accurately."
  },
  {
    icon: <Users className="w-5 h-5 text-purple-500" />,
    title: "Team Collaboration",
    description: "Contextual @mentions and shared activity feeds to keep everyone aligned."
  }
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-[#f8fafc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Precision Tools for Modern Sales
          </h2>
          <p className="text-slate-500">
            Experience the "Visual Silence" of OzenCRM's streamlined features designed to minimize friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
