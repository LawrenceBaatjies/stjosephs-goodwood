
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const DonationSidebar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-[#d4a760]">Other Ways to Support</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Bank Transfer</h3>
          <p className="text-gray-700 text-sm">
            You can also make donations via direct bank transfer to:
          </p>
          <div className="bg-gray-50 p-3 rounded-md mt-2">
            <p className="text-sm">Account Name: Goodwood Catholic Church</p>
            <p className="text-sm">Bank: Standard Bank </p>
            <p className="text-sm">( PG's & General Acc): 07 165 857 2</p>
            <p className="text-sm">(100 Club Dues Only Acc): 07 593 1672</p>
            <p className="text-sm">Reference: Donation - [Your Name]</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">In-Person Donations</h3>
          <p className="text-gray-700 text-sm">
            Donations can be made in person during Mass collections or at the parish office during office hours.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Planned Giving</h3>
          <p className="text-gray-700 text-sm">
            Join our Planned Giving Program to make regular contributions to support our parish. 
            For more information, please contact the parish office.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full space-y-4">
          <p className="text-sm text-gray-600">
            If you have any questions about donations or need assistance, please contact us at:
          </p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">donations@stjosephs.example</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">(123) 456-7890</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DonationSidebar;
