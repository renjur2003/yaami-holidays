import React, { useState } from 'react';
import Button from '../ui/Button';
import { Upload } from 'lucide-react';
import { createBoat, uploadImage } from '../../services/api';

const AddBoat = () => {
    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: 'houseboat',
        price: '',
        description: '',
        capacity: '',
        amenities: [] // Simplified for now, complex UI needed for array
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageUrl = '';
            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }

            await createBoat({ ...formData, image: imageUrl });
            alert('Boat added successfully!');
            // Reset form
            setFormData({ title: '', category: 'houseboat', price: '', description: '', capacity: '', amenities: [] });
            setPreview(null);
            setImageFile(null);
        } catch (error) {
            console.error(error);
            alert('Failed to add boat');
        }
    };

    return (
        <div className="bg-yaami-dark border border-gray-800 rounded-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-serif text-white font-bold mb-6">Add New Boat</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Boat Name</label>
                    <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="e.g. Royal Luxury Houseboat" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yaami-gold outline-none" required />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yaami-gold outline-none">
                            <option value="houseboat">Houseboat</option>
                            <option value="shikara">Shikara</option>
                            <option value="speed-boat">Speed Boat</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Price (₹)</label>
                        <input name="price" value={formData.price} onChange={handleChange} type="text" placeholder="5000" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yaami-gold outline-none" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Capacity</label>
                    <input name="capacity" value={formData.capacity} onChange={handleChange} type="text" placeholder="e.g. 2 Adults" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yaami-gold outline-none" required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yaami-gold outline-none" required></textarea>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Boat Image</label>
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-yaami-gold transition-colors cursor-pointer relative">
                        <input type="file" acceptance="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageChange} />
                        {preview ? (
                            <img src={preview} alt="Preview" className="h-32 mx-auto rounded-lg object-cover" />
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-gray-500">
                                <Upload size={24} />
                                <span>Click to upload image</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-8">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" variant="primary">Add Boat</Button>
                </div>
            </form>
        </div>
    );
};

export default AddBoat;
