module.exports = (data) => {
    let text = ""
    console.log(`sebelum ${text}`)

    for(let i = 0; i < data.length; i++){
        text += `nilai dari i ${i} adalah ${data[i]} |` 
    }
    console.log(`After ${text}`)

    return text
}