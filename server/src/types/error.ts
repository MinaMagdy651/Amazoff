interface error {
    status?: number
    name?: string
    message?: string
    stack?: string
}
class registerError extends Error {
    constructor(msg: string) {
        super(msg)

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, registerError.prototype)
    }
}
export default registerError
