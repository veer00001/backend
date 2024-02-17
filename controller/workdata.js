import workmodel from '../model/workSchema.js'
import login from '../db/loginSchema.js';




export const getworkdata = async (req, res) => {
    try {
        const data = await workmodel.find({});
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}


export const getmessgeData = async (req, res) => {
    try {
        const data = await login.find();
        res.status(200).json(data)
    }
    catch (error) {
        console.log('erro while getting data')
    }
}


export const deletemessage = async (req, res) => {
    const messageId = req.params._id;

    try {
        const deletedMessage = await login.deleteOne({ _id: messageId });

        if (deletedMessage.deletedCount === 0) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error while deleting message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};