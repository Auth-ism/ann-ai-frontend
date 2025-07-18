"use client";

import { Folder, User, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

type FolderType = {
    id: string;
    name: string;
    children: FolderType[];
    chats: { id: string; title: string }[];
};

const generateId = () => Math.random().toString(36).slice(2, 9);

const initialData: FolderType[] = [
    {
        id: "folder1",
        name: "Ana Klasör 1",
        children: [],
        chats: [],
    },
];

interface FolderItemProps {
    folder: FolderType;
    level?: number;
    onAddFolder: (parentId: string) => void;
    onDeleteFolder: (folderId: string) => void;
}

function FolderItem({
                        folder,
                        level = 0,
                        onAddFolder,
                        onDeleteFolder,
                    }: FolderItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`ml-${level * 4} pl-2 border-l border-gray-400`}>
            <div className="flex items-center justify-between py-1 hover:bg-gray-300 rounded px-1">
                <div
                    className="flex items-center gap-2 cursor-pointer select-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Folder size={16} />
                    <span className="font-semibold">{folder.name}</span>
                </div>

                <div className="flex gap-1">
                    <button
                        onClick={() => onAddFolder(folder.id)}
                        title="Klasör Ekle"
                        className="p-1 hover:bg-green-200 rounded"
                    >
                        <Plus size={14} />
                    </button>
                    <button
                        onClick={() => onDeleteFolder(folder.id)}
                        title="Klasör Sil"
                        className="p-1 hover:bg-red-200 rounded"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

            {isOpen &&
                folder.children.map((child) => (
                    <FolderItem
                        key={child.id}
                        folder={child}
                        level={level + 1}
                        onAddFolder={onAddFolder}
                        onDeleteFolder={onDeleteFolder}
                    />
                ))}
        </div>
    );
}

export default function Sidebar() {
    const [folders, setFolders] = useState<FolderType[]>(initialData);

    // Belirli bir klasörün içine yeni klasör ekler
    const addFolder = (parentId: string) => {
        const newFolder: FolderType = {
            id: generateId(),
            name: "Yeni Klasör",
            children: [],
            chats: [],
        };

        // recursive olarak parentId'yi bulup içine ekleme
        const addFolderRecursive = (items: FolderType[]): FolderType[] => {
            return items.map((item) => {
                if (item.id === parentId) {
                    return {
                        ...item,
                        children: [...item.children, newFolder],
                    };
                }
                return {
                    ...item,
                    children: addFolderRecursive(item.children),
                };
            });
        };

        setFolders((prev) => addFolderRecursive(prev));
    };

    // Klasör silme (id'ye göre recursive)
    const deleteFolder = (folderId: string) => {
        // En dışta parentId = null gibi düşün, klasörleri filtrele
        const deleteRecursive = (items: FolderType[]): FolderType[] => {
            return items
                .filter((item) => item.id !== folderId)
                .map((item) => ({
                    ...item,
                    children: deleteRecursive(item.children),
                }));
        };

        setFolders((prev) => deleteRecursive(prev));
    };

    return (
        <div className="bg-[#d4cfba] w-64 h-full flex flex-col justify-between p-4">
            <div className="overflow-y-auto flex-1">
                {folders.map((folder) => (
                    <FolderItem
                        key={folder.id}
                        folder={folder}
                        onAddFolder={addFolder}
                        onDeleteFolder={deleteFolder}
                    />
                ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
                <User className="w-6 h-6" />
                <div>
                    <p className="font-semibold">Kullanıcı Adı</p>
                    <p className="text-sm text-gray-700">user@example.com</p>
                </div>
            </div>
        </div>
    );
}
