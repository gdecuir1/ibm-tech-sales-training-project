import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PageHeader({ title, description, showBack = false, actions = null }) {
  const navigate = useNavigate();

  return (
    <div className="border-b border-ibm-gray-20 bg-white">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-ibm-gray-10 transition-colors mt-1"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5 text-ibm-gray-70" />
              </button>
            )}
            <div className="flex-1">
              <h1 className="text-page-title text-ibm-gray-100 mb-2">{title}</h1>
              {description && (
                <p className="text-sm text-ibm-gray-70 max-w-2xl">{description}</p>
              )}
            </div>
          </div>
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;

// Made with Bob
