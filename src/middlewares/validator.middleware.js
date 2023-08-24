export const validateSchema = (schema) => (req,res,next)=>{
    try {
        //el esquema lo comparas con el req.body, ya que es lo que está llegando
        schema.parse(req.body)
        next() ;
    } catch (error) {
        return res.status(400).json(error.errors.map( error => error.message))
    }
}