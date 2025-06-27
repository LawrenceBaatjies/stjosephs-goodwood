// import { supabase } from './AdminLoginContainer';


// export default function Users() {
//   const handleLogin = async (email: string, password: string) => {
//   setLoading(true);
//   setError(null);

//   const { data, error: signInError } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (signInError) {
//     setError(signInError.message);
//     setLoading(false);
//     return;
//   }

//   const user = data.user;
//   if (!user) {
//     setError("Login failed.");
//     setLoading(false);
//     return;
//   }

//   const userId = user.id;
//   const userEmail = user.email;

//   // Save user ID
//   setUserId(userId);
//   localStorage.setItem("user_id", userId);

//   // Check if user already exists
//   const { data: userRecord, error: fetchError } = await supabase
//     .from('users')
//     .select('role')
//     .eq('id', userId)
//     .single();

//   let userRole = 'editor'; // default role

//   if (userRecord) {
//     userRole = userRecord.role;
//   } else {
//     // First time login — insert user with default role
//     const { error: insertError } = await supabase
//       .from('users')
//       .insert({
//         id: userId,
//         email: userEmail,
//         last_login: new Date().toISOString(),
//         role: userRole
//       });

//     if (insertError) {
//       console.error('Insert error:', insertError);
//     }
//   }

//   // Save role in localStorage
//   localStorage.setItem("user_role", userRole);

//   setModalOpen(false);

//   // Redirect based on role
//   if (userRole === 'admin') {
//     navigate('/admin/dashboard');
//   } else if (userRole === 'editor') {
//     navigate('/editor/dashboard');
//   } else {
//     navigate('/');
//   }

//   setLoading(false);
// };

// }
// function setLoading(arg0: boolean) {
//     throw new Error('Function not implemented.');
// }

// function setError(arg0: null) {
//     throw new Error('Function not implemented.');
// }

// function setModalOpen(arg0: boolean) {
//     throw new Error('Function not implemented.');
// }

// function navigate(arg0: string) {
//     throw new Error('Function not implemented.');
// }

