import React, { useState } from 'react';
import { Shield, User, History, Share, Bell, Settings, Check, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IdentityDashboard = () => {
  const [verificationStatus] = useState('verified');
  
  const recentActivity = [
    { type: 'Verification', status: 'complete', date: '2025-01-07', description: 'Identity verification completed' },
    { type: 'Access', status: 'pending', date: '2025-01-06', description: 'Bank ABC requesting access' },
    { type: 'Update', status: 'complete', date: '2025-01-05', description: 'Phone number updated' },
  ];

  const verifiedAttributes = [
    { name: 'Full Name', status: 'verified', date: '2025-01-01' },
    { name: 'Date of Birth', status: 'verified', date: '2025-01-01' },
    { name: 'Phone Number', status: 'verified', date: '2025-01-05' },
    { name: 'Email', status: 'pending', date: '2025-01-07' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Identity Dashboard</h1>
        <div className="flex space-x-4">
          <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
          <Settings className="w-6 h-6 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Shield className="w-8 h-8 text-green-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Verification Status</p>
              <p className="text-lg font-semibold text-green-500">Verified</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <Share className="w-8 h-8 text-blue-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Active Shares</p>
              <p className="text-lg font-semibold">3 Services</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <History className="w-8 h-8 text-purple-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-lg font-semibold">Today</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Verified Attributes */}
        <Card>
          <CardHeader>
            <CardTitle>Verified Attributes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {verifiedAttributes.map((attr) => (
                <div key={attr.name} className="flex items-center justify-between p-2 border-b">
                  <div className="flex items-center">
                    {attr.status === 'verified' ? (
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                    )}
                    <span>{attr.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{attr.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b">
                  <div>
                    <p className="font-medium">{activity.type}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{activity.date}</p>
                    <p className={`text-sm ${
                      activity.status === 'complete' ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      {activity.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center border rounded-lg hover:bg-gray-50">
              <User className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <span className="text-sm">Update Profile</span>
            </button>
            <button className="p-4 text-center border rounded-lg hover:bg-gray-50">
              <Share className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <span className="text-sm">Manage Access</span>
            </button>
            <button className="p-4 text-center border rounded-lg hover:bg-gray-50">
              <History className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <span className="text-sm">View History</span>
            </button>
            <button className="p-4 text-center border rounded-lg hover:bg-gray-50">
              <Settings className="w-6 h-6 mx-auto mb-2 text-gray-500" />
              <span className="text-sm">Settings</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityDashboard;
