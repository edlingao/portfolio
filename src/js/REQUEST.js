export default class REQUEST{
    static async post(params){
        const response = await fetch('./server/main.php', {
            method: 'POST',
            body: JSON.stringify(params)
        });
        const data = await response.json();
        return data;
    }
}