import { Search, FileSearch, Lightbulb, Rocket, LineChart, RefreshCw, FileBarChart } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { processSteps } from '../../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  FileSearch,
  Lightbulb,
  Rocket,
  LineChart,
  RefreshCw,
  FileBarChart,
};

export default function ProcessSection() {
  return (
    <section className="section-padding bg-secondary-900 text-white">
      <div className="container-custom">
        <SectionTitle
          tagline="Our Process"
          title="Our Proven SEO Process for Your Success"
          highlight="SEO Process"
          description="We follow a structured, results-driven approach to ensure your business achieves sustainable growth in search rankings."
          light
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-700 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.slice(0, 4).map((step, index) => {
              const IconComponent = iconMap[step.icon] || Search;
              return (
                <div key={step.step} className="relative group">
                  <div className="bg-secondary-800 rounded-2xl p-6 border border-secondary-700 hover:border-primary-500 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-primary-400 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-secondary-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mt-6">
            {processSteps.slice(4).map((step, index) => {
              const IconComponent = iconMap[step.icon] || Search;
              return (
                <div key={step.step} className="relative group lg:last:col-start-2">
                  <div className="bg-secondary-800 rounded-2xl p-6 border border-secondary-700 hover:border-primary-500 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-primary-400 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-secondary-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
