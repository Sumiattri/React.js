Great question, Sumit! 💡

🏋️ What does “lifting the state up” mean?

In React, “lifting state up” means:

Moving the state from a child component into a common parent component, so that the parent can manage it and pass it down via props.

⸻

🧠 Why do we do it?
• When multiple components need to share or update the same state.
• When a child needs to update another sibling’s UI.
• When a parent needs full control of data flow.

⸻

📦 Example before lifting state:

Let’s say you have two sibling components:

function InputBox() {
const [text, setText] = useState("");
return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function DisplayBox() {
return <p>{/_ can't access `text` here _/}</p>;
}

These two are disconnected.

⸻

🔼 After lifting state up:

Move the state to the parent:

function ParentComponent() {
const [text, setText] = useState("");

return (
<>
<InputBox text={text} setText={setText} />
<DisplayBox text={text} />
</>
);
}

function InputBox({ text, setText }) {
return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function DisplayBox({ text }) {
return <p>{text}</p>;
}

✅ Now both children share the same state — because it was “lifted up” to their parent.

⸻

🔄 Summary:

Without lifting With lifting up
Local state in child only Shared state in parent
Components can’t sync Components stay in sync
Hard to manage logic One central place for control

⸻

Let me know if you want a real use case from your project where we can lift state — like search input or movie filters 🔎🎬✅
