import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AICoach() {
  const navigate = useNavigate();

  return (
    <div className="bg-ibm-blue-100 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl">
          {/* Primary Finding */}
          <div className="mb-6">
            <div className="text-xs uppercase tracking-wide text-ibm-gray-30 font-medium mb-2">
              Primary development area
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              Objection handling remains your lowest-performing skill at 64%
            </h2>
            <p className="text-ibm-gray-30 leading-relaxed">
              Despite a 7% improvement over the previous four sessions, this skill area continues 
              to score 18 points below your overall average of 82%. Your technical architecture 
              and business outcomes articulation are both above 90%.
            </p>
          </div>

          <div className="border-t border-white/20 pt-6 mb-6">
            <div className="text-xs uppercase tracking-wide text-ibm-gray-30 font-medium mb-2">
              Recommended action
            </div>
            <p className="text-white leading-relaxed mb-4">
              Complete two intermediate healthcare scenarios focused on procurement and security objections. 
              Healthcare is your second-strongest industry at 86%, making it an ideal context for 
              practicing objection handling without the added complexity of unfamiliar domain knowledge.
            </p>
          </div>

          <div className="border-t border-white/20 pt-6 mb-6">
            <div className="text-xs uppercase tracking-wide text-ibm-gray-30 font-medium mb-2">
              Expected impact
            </div>
            <p className="text-ibm-gray-30 leading-relaxed">
              Based on recent performance patterns, this focused practice could improve overall 
              readiness by approximately 4–6% and position you for Healthcare Expert certification.
            </p>
          </div>

          <div className="border-t border-white/20 pt-6">
            <button
              onClick={() => navigate('/interactive')}
              className="btn-primary bg-ibm-blue-60 hover:bg-ibm-blue-70 inline-flex items-center gap-2"
            >
              Start recommended scenario
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AICoach;

// Made with Bob
