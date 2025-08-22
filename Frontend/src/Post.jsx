import React from "react";

function Post({ onBack }) {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#0E0F15', overflow: 'hidden' }} className="text-white p-4">
             
      {/* Top Nav - Same as dashboard */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div className="mb-2">
          <button
            className="btn me-2 text-white border-0"
            style={{  backgroundColor: '#1F1F1F' , padding: '10px', paddingRight: '30px', paddingLeft: '30px', fontFamily: 'Sansita'}}
            onClick={onBack}
          >
            Dashboard
          </button>
          <button
            className="btn text-white border-0"
            style={{  backgroundColor: '#1F1F1F' , padding: '10px', paddingRight: '30px', paddingLeft: '30px', fontFamily: 'Sansita'}}
          >
            Leaderboards
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-md-6">
          <div style={{ backgroundColor: '#1F1F1F', borderRadius: '8px', padding: '20px' }}>
            {/* Project Name Section */}
            <div className="mb-4">
              <label className="form-label mb-2" style={{ fontSize: '1rem', fontWeight: '500', color: 'white' }}>Project Name:</label>
              <input 
                type="text" 
                className="form-control" 
                style={{ 
                  backgroundColor: '#3C4043', 
                  border: 'none', 
                  color: 'white',
                  height: '40px'
                }} 
              />
            </div>

            {/* Project Details Card */}
            <div className="mb-4" style={{ backgroundColor: '#1F1F1F', borderRadius: '8px', padding: '16px' }}>
              <div className="d-flex align-items-start mb-3">
                <div 
                  className="rounded me-3" 
                  style={{ 
                    width: '140px', 
                    height: '140px', 
                    backgroundColor: '#3C4043',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '30px',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16" style={{ color: '#6c757d' }}>
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <div className="mb-2">
                    <label style={{ fontSize: '0.9rem', color: 'white', display: 'block', marginBottom: '4px' }}>
                      <strong>Posted by:</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ 
                        backgroundColor: '#3C4043', 
                        height: '32px',
                        borderRadius: '4px',
                        border: 'none',
                        color: 'white'
                      }} 
                    />
                  </div>
                  <div className="mb-2">
                    <label style={{ fontSize: '0.9rem', color: 'white', display: 'block', marginBottom: '4px' }}>
                      <strong>Platform:</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ 
                        backgroundColor: '#3C4043', 
                        height: '32px',
                        borderRadius: '4px',
                        border: 'none',
                        color: 'white'
                      }} 
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.9rem', color: 'white', display: 'block', marginBottom: '4px' }}>
                      <strong>Scope:</strong>
                    </label>
                    <textarea
                      className="form-control"
                      style={{ 
                        backgroundColor: '#3C4043', 
                        height: '96px',
                        borderRadius: '4px',
                        border: 'none',
                        color: 'white',
                        resize: 'none'
                      }} 
                    />
                  </div>
                </div>
              </div>
              
              <button 
                className="btn text-white" 
                style={{ 
                  position: "absolute",
                  backgroundColor: '#32546D',
                  fontSize: '0.70rem',
                  padding: '10px 48px',
                  borderRadius: '21px',
                  top: '45%',
                }}
              >
                Add Link
              </button>
            </div>

            {/* Objective Section */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ fontSize: '1rem', fontWeight: '500', color: 'white' }}>Objective:</label>
              <textarea
                className="form-control"
                style={{ 
                  backgroundColor: '#3C4043', 
                  borderRadius: '8px',
                  height: '120px',
                  border: 'none',
                  color: 'white',
                  resize: 'none'
                }}
              />
            </div>

            {/* Areas to Test Section */}
            <div className="mb-0">
              <label className="form-label mb-2" style={{ fontSize: '1rem', fontWeight: '500', color: 'white' }}>Areas to Test:</label>
              <textarea
                className="form-control"
                style={{ 
                  backgroundColor: '#3C4043', 
                  borderRadius: '8px',
                  height: '120px',
                  border: 'none',
                  color: 'white',
                  resize: 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div style={{ backgroundColor: '#1F1F1F', borderRadius: '8px', padding: '20px' }}>
            {/* Bug Severity Reward Breakdown */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ fontSize: '1rem', fontWeight: '500', color: 'white' }}>Bug Severity Reward Breakdown:</label>
              <textarea
                className="form-control"
                style={{ 
                  backgroundColor: '#3C4043', 
                  borderRadius: '8px',
                  height: '180px',
                  border: 'none',
                  color: 'white',
                  resize: 'none'
                }}
              />
            </div>

            {/* Notes Section */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ fontSize: '1rem', fontWeight: '500', color: 'white', marginTop: '45px'}}>Notes:</label>
              <textarea
                className="form-control"
                style={{ 
                  backgroundColor: '#3C4043', 
                  borderRadius: '8px',
                  height: '80px',
                  border: 'none',
                  color: 'white',
                  resize: 'none'
                }}
              />
            </div>

            {/* Enter Total Bounty Credit */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ fontSize: '1rem', fontWeight: '500', color: 'white', marginTop: '45px' }}>Enter Total Bounty Credit:</label>
              <input
                type="text"
                className="form-control"
                style={{ 
                  backgroundColor: '#3C4043', 
                  height: '40px',
                  borderRadius: '4px',
                  border: 'none',
                  color: 'white'
                }} 
              />
            </div>

            {/* Checkbox */}
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                style={{ 
                  width: '16px', 
                  height: '16px', 
                  backgroundColor: '#3C4043',
                  borderRadius: '3px',
                  marginRight: '8px',
                  cursor: 'pointer'
                }}
              />
              <label style={{ fontSize: '0.8rem', color: 'white' }}>
                I confirm that I have read and accept the terms and conditions and privacy policy.
              </label>
            </div>

            {/* PayPal Button */}
            <button 
              className="btn w-100" 
              style={{ 
                backgroundColor: '#ffc439',
                color: '#003087',
                fontWeight: 'bold',
                height: '50px',
                borderRadius: '6px',
                marginTop: '45px',
              }}
            >
              Pay with PayPal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;