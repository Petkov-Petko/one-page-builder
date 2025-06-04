import { useState } from "react"

const HeaderEditor = () => {
  const [lang, setLang] = useState("en")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <div className="header-editor">
      <div className="mb-3">
        <label className="form-label">Website Language</label>
        <input
          type="text"
          className="form-control"
          value={lang}
          onChange={e => setLang(e.target.value)}
          placeholder="e.g. en, fr, es"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Website Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter website title"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Website Description</label>
        <textarea
          className="form-control"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Enter website description"
        />
      </div>
    </div>
  )
}

export default HeaderEditor