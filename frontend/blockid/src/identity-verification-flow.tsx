import React, { useState } from 'react';
import { Camera, Check, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IdentityVerification = () => {
  const [step, setStep] = useState(1);
  const [verificationStatus, setVerificationStatus] = useState('pending');

  const steps = [
    {
      title: 'Facial Verification',
      description: 'Take a clear photo of your face',
      icon: Camera,
      status: step > 1 ? 'complete' : step === 1 ? 'current' : 'pending'
    },
    {
      title: 'Phone Verification',
      description: 'Verify your phone number',
      icon: AlertCircle,
      status: step > 2 ? 'complete' : step === 2 ? 'current' : 'pending'
    },
    {
      title: 'Final Verification',
      description: 'Blockchain verification in progress',
      icon: Loader2,
      status: step === 3 ? 'current' : 'pending'
    }
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Identity Verification</CardTitle>
        <CardDescription>Complete the following steps to verify your identity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {steps.map((s, index) => (
            <div key={s.title} className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                s.status === 'complete' ? 'bg-green-100' :
                s.status === 'current' ? 'bg-blue-100' :
                'bg-gray-100'
              }`}>
                {s.status === 'complete' ? (
                  <Check className="w-6 h-6 text-green-600" />
                ) : (
                  <s.icon className={`w-6 h-6 ${
                    s.status === 'current' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </div>
              {s.status === 'current' && (
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Start
                </button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IdentityVerification;
