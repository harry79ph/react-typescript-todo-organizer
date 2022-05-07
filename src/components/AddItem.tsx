import { useRef, useState } from "react";

interface AddItemProps {
    onUserSubmit: (className: string, titleValue: string, contentValue: string, isActive: boolean) => void;
}

const AddItem = (props: AddItemProps) => {

    const btnRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onUserSubmit('cando disabled', title, content, false);
        setTitle('');
        setContent('');
    }

    const handleSave = () => {
        // addToLocal(['cando', 'todo'], candos, todos);
        btnRef.current!.value = 'Updated..';
        setTimeout(() => {
            btnRef.current!.value = 'Save';
        }, 2000);       
    }

    return (
        <div className="add">
            <h1>Todo Organizer</h1>
            <form onSubmit={onFormSubmit} className="adder">
                <div className="title">
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={28} placeholder="Add Title" autoFocus/>
                </div>
                <div className="content">
                    <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} rows={6} cols={20} placeholder="Add Content" maxLength={1000}></textarea>
                </div>
                <div className="btn-wrapper">
                    <input className="btn" type="submit" value="Submit" disabled={title.length > 0 && content.length > 0 ? false : true}/>
                    <input className="btn" type="button" ref={btnRef} onClick={handleSave} value="Save" />
                </div>
            </form>
        </div>
    );
}

export default AddItem;