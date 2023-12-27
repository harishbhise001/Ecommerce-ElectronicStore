import { toast } from "react-toastify"

const error=(message)=>{
    toast.error(message);
}

const success=(message)=>{
    toast.success(message);
}

export default { error,success };