"use client";

import { Folder, User, Plus, Trash2, Pencil } from "lucide-react";
import React, { useState } from "react";

type FolderType = {
    id: string;
    name: string;
    children: FolderType[];
    chats: { id: string; title: string }[];
};

const generateId = () => Math.random().toString(36).slice(2, 9);

interface FolderItemProps {
    folder: FolderType;
    level?: number;
    onAddFolder: (parentId: string) => void;
    onDeleteFolder: (folderId: string) => void;
    onRenameFolder: (folderId: string, newName: string) => void;
}

function FolderItem({
                        folder,
                        level = 0,
                        onAddFolder,
                        onDeleteFolder,
                        onRenameFolder,
                    }: FolderItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [nameInput, setNameInput] = useState(folder.name);

    const handleRename = () => {
        onRenameFolder(folder.id, nameInput.trim() || "Adsız Klasör");
        setEditing(false);
    };

    return (
        <div className={`ml-${level * 4} pl-2 border-l border-gray-400`}>
            <div className="flex items-center justify-between py-1 hover:bg-gray-300 rounded px-1">
                <div
                    className="flex items-center gap-2 cursor-pointer select-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Folder size={16} />
                    {editing ? (
                        <input
                            autoFocus
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            onBlur={handleRename}
                            onKeyDown={(e) => e.key === "Enter" && handleRename()}
                            className="bg-white border border-gray-400 px-1 rounded text-sm"
                        />
                    ) : (
                        <span className="font-semibold">{folder.name}</span>
                    )}
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
                        onClick={() => setEditing(true)}
                        title="Yeniden Adlandır"
                        className="p-1 hover:bg-yellow-200 rounded"
                    >
                        <Pencil size={14} />
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
                        onRenameFolder={onRenameFolder}
                    />
                ))}
        </div>
    );
}

export default function Sidebar() {
    const [folders, setFolders] = useState<FolderType[]>([]);

    const addFolder = (parentId: string | null) => {
        const newFolder: FolderType = {
            id: generateId(),
            name: "", // Boş başlayacak, input'tan isim verilecek
            children: [],
            chats: [],
        };

        if (parentId === null) {
            setFolders((prev) => [...prev, newFolder]);
            return;
        }

        const recursiveAdd = (items: FolderType[]): FolderType[] =>
            items.map((item) =>
                item.id === parentId
                    ? { ...item, children: [...item.children, newFolder] }
                    : { ...item, children: recursiveAdd(item.children) }
            );

        setFolders((prev) => recursiveAdd(prev));
    };

    const deleteFolder = (folderId: string) => {
        const recursiveDelete = (items: FolderType[]): FolderType[] =>
            items
                .filter((item) => item.id !== folderId)
                .map((item) => ({
                    ...item,
                    children: recursiveDelete(item.children),
                }));

        setFolders((prev) => recursiveDelete(prev));
    };

    const renameFolder = (folderId: string, newName: string) => {
        const recursiveRename = (items: FolderType[]): FolderType[] =>
            items.map((item) =>
                item.id === folderId
                    ? { ...item, name: newName }
                    : { ...item, children: recursiveRename(item.children) }
            );

        setFolders((prev) => recursiveRename(prev));
    };

    return (
        <div className="bg-[#d4cfba] w-64 h-full flex flex-col justify-between p-4">
            <div className="overflow-y-auto flex-1 space-y-2">
                <button
                    onClick={() => addFolder(null)}
                    className="bg-white px-2 py-1 rounded text-sm hover:bg-gray-200 border border-gray-300"
                >
                    + Yeni Klasör
                </button>

                {folders.map((folder) => (
                    <FolderItem
                        key={folder.id}
                        folder={folder}
                        onAddFolder={addFolder}
                        onDeleteFolder={deleteFolder}
                        onRenameFolder={renameFolder}
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
