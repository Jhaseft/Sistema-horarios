import { MapPin, Mail, MessageCircle } from "lucide-react";

export default function DescripcionHeader() {
    return (
        <div className="flex md:items-center justify-between border-b pb-4 mb-4">
            
            <h2 className="text-2xl font-semibold mb-2">Barbería</h2>

            <div className="flex items-center gap-4">

                <div className="flex items-center gap-1">
                    <MapPin className="w-5 h-5 text-black" />
                    <span className="hidden md:inline text-sm text-gray-700">Dirección</span>
                </div>

                <div className="flex items-center gap-1">
                    <Mail className="w-5 h-5 text-black" />
                    <span className="hidden md:inline text-sm text-gray-700">Email</span>
                </div>

                <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5 text-black" />
                    <span className="hidden md:inline text-sm text-gray-700">Whatsapp</span>
                </div>

            </div>
        </div>
    );
}
