import React from "react";

function BugReport({ onBack }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0E0F15', padding: '20px' }}>
      {/* Top Nav */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button
            className="btn me-2 text-white border-0"
            style={{ backgroundColor: '#1F1F1F', padding: '10px', paddingRight: '30px', paddingLeft: '30px', fontFamily: 'Sansita' }}
            onClick={onBack}
          >
            Dashboard
          </button>
          <button
            className="btn text-white border-0"
            style={{ backgroundColor: '#1F1F1F', padding: '10px', paddingRight: '30px', paddingLeft: '30px', fontFamily: 'Sansita' }}
          >
            Leaderboards
          </button>
        </div>
        <div
          className="rounded-circle bg-secondary"
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
        ></div>
      </div>

      <div style={{ display: 'flex', gap: '25px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Left Section - Project Details */}
        <div style={{ width: '380px' }}>
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '25px',
            marginBottom: '20px'
          }}>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>[Project Name]</h4>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#3C4043',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" style={{ color: '#6c757d' }}>
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Posted by: </span>
                  <span style={{ color: 'white', fontSize: '0.85rem' }}>[Company]</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Platform: </span>
                  <span style={{ color: 'white', fontSize: '0.85rem' }}>[Platform]</span>
                </div>
                <div>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Scope: </span>
                  <span style={{ color: 'white', fontSize: '0.85rem' }}>[Scope details]</span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#888', fontSize: '0.85rem' }}>Critical Bug: </span>
                <span style={{ color: 'white', fontSize: '0.85rem' }}>XXX credit</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#888', fontSize: '0.85rem' }}>Major Bug: </span>
                <span style={{ color: 'white', fontSize: '0.85rem' }}>XXX credits</span>
              </div>
              <div>
                <span style={{ color: '#888', fontSize: '0.85rem' }}>Minor Bug: </span>
                <span style={{ color: 'white', fontSize: '0.85rem' }}>XXX credits</span>
              </div>
            </div>

            <button 
              className="btn w-100"
              style={{ 
                backgroundColor: '#32546D',
                color: 'white',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '0.9rem'
              }}
            >
              Download on AppStore
            </button>
          </div>

          {/* Objective Section */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '25px',
            marginBottom: '20px'
          }}>
            <h6 style={{ color: 'white', marginBottom: '15px', fontSize: '1rem' }}>Objective:</h6>
            <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>
              [Objective description will go here]
            </p>
          </div>

          {/* Areas to Test Section */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '25px'
          }}>
            <h6 style={{ color: 'white', marginBottom: '15px', fontSize: '1rem' }}>Areas to Test:</h6>
            <ul style={{ color: '#888', fontSize: '0.9rem', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>[Test area 1]</li>
              <li style={{ marginBottom: '8px' }}>[Test area 2]</li>
              <li style={{ marginBottom: '8px' }}>[Test area 3]</li>
              <li>[Test area 4]</li>
            </ul>
            
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              backgroundColor: '#252525',
              borderRadius: '6px',
              borderLeft: '3px solid #ffc439'
            }}>
              <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>
                <strong>Note:</strong> [Additional testing notes]
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Bug Report Form */}
        <div style={{ flex: 1 }}>
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '30px'
          }}>
            {/* Report Title */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '10px', display: 'block' }}>
                Report Title:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a descriptive title for the bug"
                style={{ 
                  backgroundColor: '#2A2A2A',
                  border: '1px solid #3C4043',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '6px'
                }}
              />
            </div>

            {/* Bug Information & Steps */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '10px', display: 'block' }}>
                Bug Information & Steps to Reproduce:
              </label>
              <textarea
                className="form-control"
                placeholder="Describe the bug and provide step-by-step instructions to reproduce it"
                rows="8"
                style={{ 
                  backgroundColor: '#2A2A2A',
                  border: '1px solid #3C4043',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '6px',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Two Column Section */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
              {/* Expected Behavior */}
              <div style={{ flex: 1 }}>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '10px', display: 'block' }}>
                  Expected vs Actual Behavior:
                </label>
                <textarea
                  className="form-control"
                  placeholder="What should happen vs what actually happens"
                  rows="6"
                  style={{ 
                    backgroundColor: '#2A2A2A',
                    border: '1px solid #3C4043',
                    color: 'white',
                    padding: '15px',
                    borderRadius: '6px',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Attached Evidence */}
              <div style={{ flex: 1 }}>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '10px', display: 'block' }}>
                  Attached Evidences:
                </label>
                <div style={{ 
                  backgroundColor: '#2A2A2A',
                  border: '2px dashed #3C4043',
                  borderRadius: '6px',
                  padding: '40px',
                  textAlign: 'center',
                  height: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📁</div>
                  <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                    Drop files here or click to upload
                  </p>
                  <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '5px' }}>
                    Screenshots, videos, or logs
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <button 
                className="btn"
                style={{ 
                  backgroundColor: '#32546D',
                  color: 'white',
                  padding: '12px 40px',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}
              >
                SAVE DRAFT
              </button>
              <button 
                className="btn"
                style={{ 
                  backgroundColor: '#DC3545',
                  color: 'white',
                  padding: '12px 40px',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}
              >
                SUBMIT REPORT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugReport;