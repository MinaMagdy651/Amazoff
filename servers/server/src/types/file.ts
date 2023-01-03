export interface fileType extends Request {
    name: string
    data: Buffer
    size: number
    encoding: string
    tempFilePath: string
    truncated: boolean
    mimetype: string
    md5: string
    mv: Function
}

export interface MulterRequest extends Request {
    file: any
}
