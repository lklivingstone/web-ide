import axios from "axios";

export const submission = async (language_id, code, input) => {
    if (input === "") {
        input = null;
    }

    console.log(process.env.REACT_APP_X_RAPIDAPI_HOST)

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
            'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST
        },
        data: {
            language_id: language_id,
            source_code: btoa(code),
            stdin: btoa(input)
        }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error);
    }
}
