import axios from 'axios';
import curlirize from 'axios-curlirize';


const ax = axios.create({ baseURL: 'http://x.d.so:8080' });
// ax.interceptors.response.use((res) => res.data)
curlirize(ax);

ax.post('/api/v1/xxx', { data: { name: 'nicholas' } });
// output: `curl -X POST "http://x.d.so:8080/api/v1/xxx" -H "Content-Type:application/x-www-form-urlencoded" --data '{"data":{"name":"nicholas"}}'`