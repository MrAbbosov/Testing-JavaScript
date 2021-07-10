const {sumAsync, subtractAsync} = require('./math.js')

test("Sum numbers", async () => {
    result = await sumAsync(2, 7)
    expected =  10
    expect(result).toBe(expected)
})
    
async function test(title, callback) {
    try{
        await callback()
        console.log(`ok ${title}`)
    } catch(error){
        console.error(`X ${title}`)
        console.error(error)
    }
}

function expect(actual) {
    return {
        toBe(expected){
            if(actual !== expected) {
                throw new Error (`${result} is not equal to ${expected}`)
            }
        }     
    }
}