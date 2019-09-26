module.exports = (data) => {
    let text = ""
    console.log(`Sebelum ${text}`)
    
    let loop = data.map((value, index) => text += `Nilai dari ${index} adalah ${value} | `)
    console.log(`After ${text}`)

    let result = {
        loop,
        text
    }

    return result
}