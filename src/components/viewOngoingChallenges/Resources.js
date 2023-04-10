import React, {useState} from 'react';

function Resources({resources}) {
  const [file, setFile] = useState('');

  const handleDownload = () => {
    fetch(resources, {mode: 'no-cors'})
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.setAttribute('download', 'Official Rules');
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  };

  const downloadURI = (uri, name) => {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link = null;
  };

  const onDownload = () => {
    downloadURI(resources, 'Official Rules');
  };

  const onAdd = e => {
    e.preventDefault();
    document.getElementById('input_file').click();
  };

  const onFileUdpate = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Resources</h3>
        <button className="btn-edit" onClick={onAdd}>
          Add New <i className="fas fa-plus"></i>
        </button>
      </div>
      <input
        type="file"
        name=""
        id="input_file"
        hidden
        onChange={onFileUdpate}
      />

      <div className="col-lg-3">
        <div className="card p-3">
          <i className="fas fa-file-pdf pdf-icon"></i>
          <div className=" d-flex justify-content-between mt-5">
            <small className="text-muted">Challenge Brief</small>
          </div>
          <div className="mt-3">
            <div
              role="button"
              className="text-primary"
              onClick={handleDownload}>
              Download <i className="fas fa-download"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
