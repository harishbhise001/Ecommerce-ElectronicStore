import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const error=(message)=>{
    toast.error(message);
}

const success=(message)=>{
    toast.success(message);
}

export default { error,success };