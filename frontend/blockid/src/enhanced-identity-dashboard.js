import React, { useState } from 'react';
import { Shield, User, History, Share, Bell, Settings, Check, AlertTriangle, Lock, FileText, Activity, PieChart, Users, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const EnhancedIdentityDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data for the activity chart
  const activityData = [
    { date: 'Jan 1', verifications: 5 },
    { date: 'Jan 2', verifications: 3 },
    { date: 'Jan 3', verifications: 7 },
    { date: 'Jan 4', verifications: 4 },
    { date: 'Jan 5', verifications: 8 },
    { date: 'Jan 6', verifications: 6 },
    { date: 'Jan 7', verifications: 9 }
  ];

  const securityScore = 85;
  
  const identityAttributes = [
    { name: 'Full Name', status: 'verified', date: '2025-01-01', confidence: 98 },
    { name: 'Date of Birth', status: 'verified', date: '2025-01-01', confidence: 95 },
    { name: 'Phone Number', status: 'verified', date: '2025-01-05', confidence: 90 },
    { name: 'Email', status: 'pending', date: '2025-01-07', confidence: 0 },
    { name: 'Address', status: 'verified', date: '2025-01-03', confidence: 92 },
    { name: 'Government ID', status: 'verified', date: '2025-01-01', confidence: 97 }
  ];

  const activeConnections = [
    { name: 'Bank ABC', type: 'Financial', lastAccess: '2025-01-07', status: 'active' },
    { name: 'Insurance XYZ', type: 'Insurance', lastAccess: '2025-01-06', status: 'active' },
    { name: 'Credit Union', type: 'Financial', lastAccess: '2025-01-05', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Identity Vault</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-6 h-6 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="w-6 h-6 text-gray-500" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Score */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Security Score</h2>
                  <p className="text-gray-500">Your identity protection level</p>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                    <span className="text-2xl font-bold">{securityScore}%</span>
                  </div>
                  <div className="ml-4">
                    <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh Score
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Verification Activity</CardTitle>
                <CardDescription>Past 7 days of identity verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activityData}>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="verifications" stroke="#2563eb" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Identity Attributes */}
            <Card>
              <CardHeader>
                <CardTitle>Identity Attributes</CardTitle>
                <CardDescription>Verified information and confidence scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {identityAttributes.map((attr) => (
                    <div key={attr.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {attr.status === 'verified' ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        )}
                        <div>
                          <p className="font-medium">{attr.name}</p>
                          <p className="text-sm text-gray-500">Updated: {attr.date}</p>
                        </div>
                      </div>
                      {attr.status === 'verified' && (
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500" 
                              style={{ width: `${attr.confidence}%` }}
                            />
                          </div>
                          <span className="ml-2 text-sm font-medium">{attr.confidence}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <button className="w-full p-3 flex items-center justify-between bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 mr-3" />
                      <span>Request Verification</span>
                    </div>
                    <Check className="w-5 h-5" />
                  </button>
                  <button className="w-full p-3 flex items-center justify-between bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
                    <div className="flex items-center">
                      <Share className="w-5 h-5 mr-3" />
                      <span>Share Identity</span>
                    </div>
                    <Check className="w-5 h-5" />
                  </button>
                  <button className="w-full p-3 flex items-center justify-between bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
                    <div className="flex items-center">
                      <Lock className="w-5 h-5 mr-3" />
                      <span>Security Settings</span>
                    </div>
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Active Connections */}
            <Card>
              <CardHeader>
                <CardTitle>Active Connections</CardTitle>
                <CardDescription>Services with access to your identity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeConnections.map((connection) => (
                    <div key={connection.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{connection.name}</p>
                        <p className="text-sm text-gray-500">{connection.type}</p>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          connection.status === 'active' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {connection.status}
                        </span>
                        <button className="ml-2 p-1 hover:bg-gray-100 rounded">
                          <Settings className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedIdentityDashboard;
