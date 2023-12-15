import { Note } from "../config/database.js"
import CustomError from "../utils/CustomError.js";

export default {

    createNote: async(req, res, next ) => {
        try {
            const { head, text } = req.body;
            const noteData = {
                head,
                text,
                userId: 31,
            };
            const newNote = await Note.create(noteData);
            return res.status(201).json({ message: "Note created successfully", data: newNote });
        } catch (error) {
            next(error);
        }
    },

    updateNote: async(req, res, next) => {
        try {
            const { head, text } = req.body
            const prevNote = await Note.findOne({ where: { id: req.params.id } })
            if (!prevNote) {
                throw new CustomError("Note item not found", 404);
            }
            const updatedNote = await prevNote.update({ head, text})
            return res.status(201).json({ message: "Note updated successfully", data: updatedNote });
        } catch (error) {
            next(error)
        }
    },

    deleteNote: async( req, res, next ) => {
        try {
            await Note.destroy({ where: { id: req.params.id } })
            return res.status(201).json({ message: "Note deleted successfully" });
            
        } catch (error) {
            next(error)
        }
    }

}