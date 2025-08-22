import React from "react";

function Dashboard({ onPostProject, onProfile, onLogs }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0E0F15' }} className="text-light p-4">
            
      {/* Top Nav */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div className="mb-2">
          <button
            className="btn me-2 text-light border-0"
            style={{ backgroundColor: '#1F1F1F' , padding: '10px', paddingRight: '30px', paddingLeft: '30px', fontFamily: 'Sansita'}}
          >
            Dashboard
          </button>
          <button
            className="btn text-light border-0"
            style={{ backgroundColor: '#1F1F1F' , padding: '10px', paddingRight: '30px', paddingLeft: '30px', fontFamily: 'Sansita'}}
          >
            Leaderboards
          </button>
        </div>
        <div className="d-flex align-items-center mb-2">
          <button 
            className="btn btn-outline-light me-3"
            onClick={onLogs}
          >
            Logs
          </button>
          <button 
            className="btn btn-outline-light me-3"
            onClick={onPostProject}
          >
            Post a Project
          </button>
          <div
            className="rounded-circle bg-secondary"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={onProfile}
          ></div>
        </div>
      </div>

      <h3 className="mb-4">Live Projects</h3>

      <div className="row gx-4 gy-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <div className="card text-light h-100 shadow-sm border-0" style={{ backgroundColor: '#1F1F1F', minHeight: '280px', width: 'calc(100% - 50px)' }}>
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <hr style={{ borderColor: '#3C4043', margin: '20px 0' }} />
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <p className="card-text">
                      <strong>Posted by:</strong><br />
                      <strong>Platform:</strong><br />
                      <strong>Scope:</strong><br /><br />
                      Critical Bug:<br />
                      Major Bug:<br />
                      Minor Bug:<br /><br />
                      Remaining Bounty:<br />
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-light-emphasis">X hours ago</small>
                      <i className="bi bi-save"></i>
                    </div>
                  </div>
                  <div className="ms-3">
                    <div 
                      style={{ 
                        width: '120px', 
                        height: '120px', 
                        backgroundColor: '#3C4043',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16" style={{ color: '#6c757d' }}>
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Dashboard;