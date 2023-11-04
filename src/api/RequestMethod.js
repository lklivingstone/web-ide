import axios from "axios";

export const submission = async (language_id, code, input) => {
    if (input === "") {
        input = null;
    }

    let options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
        base64_encoded: 'true',
        wait: 'true',
        fields: '*'
        },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '7106ac827emsh505e6f3035158a1p1ac3b9jsn6e529ebbb607',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: {
            language_id: language_id,
            source_code: btoa(code),
            stdin: btoa(input)
        }
    };
    
    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
