import axios from 'axios';
import { toast } from 'react-toastify';

export default async function add(link, email, trigger) {
    const data = {link, email, "trigger": Number(trigger)}
    axios.post('http://localhost:5000/insert', data).then((res) => {
        toast.success(res.data);
    }).catch(err => { toast.error(err.message) });
}
