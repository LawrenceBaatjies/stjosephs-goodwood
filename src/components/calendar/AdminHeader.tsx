
import React from 'react';
import { Card } from "@/components/ui/card";

interface AdminHeaderProps {
  userEmail: string | null;
  onLogout: () => void;
}

const AdminHeader = ({ userEmail, onLogout }: AdminHeaderProps) => {
  return (
    <Card className="p-6 mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          {userEmail ? `Welcome, ${userEmail}` : 'Parish Calendar'}
        </h3>
        {userEmail && (
          <button
            onClick={onLogout}
            className="text-sm text-gray-500 hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </Card>
  );
};

export default AdminHeader;
