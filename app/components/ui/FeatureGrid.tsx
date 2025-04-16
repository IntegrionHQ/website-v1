import React from 'react';
import { FileCode, Zap, AlertCircle, RefreshCw, Database, CheckCircle } from 'lucide-react';
import Card from './Card';

const featuresData = {
  "features": [
    {
      "title": "AI-powered test case generation",
      "description": "Create unit, integration, and E2E test cases automatically with a very wide coverage.",
      "icon": FileCode
    },
    {
      "title": "Instant test execution",
      "description": "Run tests seamlessly with lightning speed, across multiple environments.",
      "icon": Zap
    },
    {
      "title": "Detailed failure insights",
      "description": "Receive pinpointed logs and AI-driven solutions for every failed test.",
      "icon": AlertCircle
    },
    {
      "title": "Self-Optimizing Workflows",
      "description": "AI continuously refines test strategies based on past results, optimizing test coverage and reducing redundant checks for faster and more efficient QA.",
      "icon": RefreshCw
    },
    {
      "title": "Comprehensive DBMS testing",
      "description": "Ensure robust backend database integration with your other backend services.",
      "icon": Database
    },
    {
      "title": "Full QA Coverage",
      "description": "From simple unit tests to complex system-level integrations, your entire QA process is fully covered.",
      "icon": CheckCircle
    }
  ]
};

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {featuresData.features.map((feature, index) => (
        <Card
          key={index}
          featureName={feature.title}
          Icon={feature.icon}
          desc={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
