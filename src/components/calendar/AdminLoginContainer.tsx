// // import { createClient } from '@supabase/supabase-js';
// import { useState } from 'react';
// import AdminLoginModal from './AdminLoginModal';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '@/lib/supabase-client';



// const AdminLoginContainer = () => {
//   const [modalOpen, setModalOpen] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);

//   const navigate = useNavigate();

//   const handleLogin = async (email: string, password: string) => {
//     setLoading(true);
//     setError(null);

//     const { data, error: signInError } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (signInError) {
//       setError(signInError.message);
//       setLoading(false);
//       return;
//     }

//     const user = data.user;
//     if (!user) {
//       setError("Login failed.");
//       setLoading(false);
//       return;
//     }

//     const userId = user.id;
//     const userEmail = user.email;

//     setUserId(userId);
//     localStorage.setItem("user_id", userId);

//     // Fetch role from DB
//     const { data: userRecord, error: fetchError } = await supabase
//       .from('users')
//       .select('role')
//       .eq('id', userId)
//       .single();

//     let userRole = 'editor';

//     if (userRecord) {
//       userRole = userRecord.role;
//     } else {
//       // Insert new user
//       await supabase
//         .from('users')
//         .insert({
//           id: userId,
//           email: userEmail,
//           role: userRole,
//           last_login: new Date().toISOString(),
//         });
//     }

//     localStorage.setItem("user_role", userRole);
//     setModalOpen(false);

//     // Redirect by role
//     if (userRole === 'admin') {
//       navigate('/admin/dashboard');
//     } else {
//       navigate('/editor/dashboard');
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <AdminLoginModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onLogin={handleLogin}
//         loading={loading}
//         error={error}
//       />
//       {userId && <p className="text-sm text-center mt-2">Logged in as: {userId}</p>}
//     </>
//   );
// };

// export default AdminLoginContainer;

// // async function loginUser(email, password) {
// //     // Sign in the user
// //     const { user, session, error } = await supabase.auth.signIn({
// //         email,
// //         password,
// //     });
// //     if (error) {
// //         console.error('Error logging in:', error);
// //         return;
// //     }
// //     console.log('User logged in:', user);
// //     // Store user login information in the database
// //     const { data, error: dbError } = await supabase
// //         .from('users')  // Ensure 'users' is the correct table name
// //         .insert([
// //             { email: email, last_login: new Date() }  // Adjust fields as necessary
// //         ])
// //         .select(); // Add .select() if you want to retrieve the inserted data
// //     if (dbError) {
// //         console.error('Error storing login info:', dbError);
// //     } else {
// //         console.log('Login info stored:', data);
// //     }
// // }