// import ButtonBis from "../Base/ButtonBis";
// import { Link } from "react-router-dom";
// import React from "react";
// import { URL_BACK_UPDATE_DESCRIPTION, URL_BACK_UPDATE_EXPERIENCE } from "../../constants/urls/urlBackEnd";
// import { UserCircleIcon } from "@heroicons/react/solid";
// import { Field, Formik } from "formik";
// import * as Yup from 'Yup';

// export default function ProfileEditDescription({ username, job, description }) {

//     const formShema = Yup.object().shape({
//         username : Yup.string().min(3).required('required'),
//         job : Yup.string().min(3).required('required'),
//         description : Yup.string().min(3).required('required')
//     })

//   return (
//     <Formik
//     initialValues={{
//         username: username,
//         job: job ? job : "job",
//         description : description ? description : "description"
//     }}
//     onSubmit={async (values, actions) => {
//         await apiGateway.post(URL_BACK_UPDATE_EXPERIENCE,values).then((res) => {
//             console.log(res);
//         }).catch((err) => {
//             if(err){
//                 alert("erreur server")
//             }
//             console.log(err);
//         });
//       }}
//     >
//         {props => (
//             <form onSubmit={props.handleSubmit}>
//                 <div className="flex p-5">
//                 <div className="flex flex-col w-1/4 ">
//                     <UserCircleIcon />
//                     <Field
//                         className="text-center border-2 border-gradient-v rounded-lg my-1 "
//                         id="username" 
//                         name="username" 
//                         type="text"
//                     />
//                     <Field
//                         className="text-center border-2 border-gradient-v rounded-lg my-1 "
//                         id="job" 
//                         name="job" 
//                         type="text"
//                     />
//                     <ButtonBis className="mt-3" title="Editer ma photo" />
//                 </div>
//                 <div className="flex flex-col items-center w-3/4 ml-2">
//                     <Field
//                         className="border-2 border-gradient-v rounded-lg my-1 w-full h-full resize-none "
//                         id="description" 
//                         name="description" 
//                         component="textarea"
//                     />
//                     <ButtonBis
//                         className="mt-2"
//                         title="Sauvegarder les modification"
//                         type="submit"
//                      />
//                 </div>
//             </div>
//             </form>
            
//         )}
//     </Formik>
    
//   );
// }