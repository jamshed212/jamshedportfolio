const FEATURE_MAP: Record<string, string[]> = {
  WEBSITE: ["Lead Gen", "Contact Forms", "CMS", "Blog", "Analytics", "SEO", "Animations"],
  WEB_APP: ["Authentication", "User Dashboard", "Roles", "Notifications", "Payments", "API Integrations"],
  ECOMMERCE: ["Product Catalog", "Cart", "Checkout", "Inventory", "Coupons", "Reviews"],
  SOFTWARE: ["Workflow Automation", "CRM", "Reports", "Employee Mgmt", "Data Exports"],
  MOBILE: ["Push Notifications", "Geolocation", "Biometrics", "Offline Sync"]
};

type FeatureSelectorProps = {
  type: string;
  selected: string[];
  onChange: (value: string) => void;
};

export function FeatureSelector({ type, selected, onChange }: FeatureSelectorProps) {
  const options = FEATURE_MAP[type] || ["Custom Requirement"];

  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`p-6 border ${selected.includes(opt) ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
        >
          <span className="text-sm font-bold tracking-tight">{opt}</span>
        </button>
      ))}
    </div>
  );
}