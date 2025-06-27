// import React, { useEffect, useState } from 'react';
// import { supabase } from 'src/lib/supabase-client';
// import { useNavigate } from 'react-router-dom';
// // import LogoutButton from '../components/LogoutButton';

// const EditorDashboard = () => {
//   const [email, setEmail] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: { user }, error } = await supabase.auth.getUser();
//       if (error || !user) {
//         navigate('/'); // redirect to login if no user
//       } else {
//         setEmail(user.email);
//       }
//     };

//     fetchUser();
//   }, [navigate]);

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Editor Dashboard</h1>
//       <p className="mb-2">Welcome, <strong>{email}</strong>!</p>
//       <p className="mb-4 text-muted-foreground">You have access to edit content and manage your workspace.</p>

//       {/* Example editor features */}
//       <ul className="list-disc pl-5 space-y-2">
//         <li>Create and edit posts</li>
//         <li>Manage personal drafts</li>
//         <li>Request admin approval</li>
//       </ul>

//       {/* <div className="mt-6">
//         <LogoutButton />
//       </div> */}
//     </div>
//   );
// };

// export default EditorDashboard;
