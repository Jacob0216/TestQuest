import React from "react";

function Profile({ onBack, onLogout }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0E0F15', padding: '20px' }}>
      {/* Top Nav */}
      <div className="d-flex justify-content-between mb-4">
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
        <button
          className="btn btn-outline-danger"
          onClick={onLogout}
          style={{ padding: '10px 25px' }}
        >
          Log Out
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Left Sidebar */}
        <div style={{ width: '280px' }}>
          {/* Profile Card */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '30px',
            textAlign: 'center',
            marginBottom: '20px',
            height: '250px'
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor: '#3C4043',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#6c757d" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </div>
            
            <h5 style={{ color: 'white', marginBottom: '8px', fontSize: '1.2rem' }}>[Name]</h5>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>Project Developer</p>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span style={{ color: '#00BFA5', fontSize: '0.9rem' }}>● Active</span>
            </div>
          </div>

          {/* Role & Permissions */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '25px',
            marginBottom: '20px'
          }}>
            <h6 style={{ color: 'white', marginBottom: '20px', fontSize: '1rem' }}>Role & Permissions</h6>
            
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>Bug Testing</span>
              <span style={{ color: '#00BFA5', fontSize: '1.3rem' }}>✓</span>
            </div>
            
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>Project Access</span>
              <span style={{ color: '#00BFA5', fontSize: '1.3rem' }}>✓</span>
            </div>
            
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>Admin Panel</span>
              <span style={{ color: '#FF4757', fontSize: '1.3rem' }}>✕</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>User Management</span>
              <span style={{ color: '#FF4757', fontSize: '1.3rem' }}>✕</span>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '25px'
          }}>
            <h6 style={{ color: 'white', marginBottom: '20px', fontSize: '1rem' }}>Contact Information</h6>
            
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#888', fontSize: '1rem' }}>✉</span>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>[email]</span>
            </div>
            
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#888', fontSize: '1rem' }}>📞</span>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>[phone]</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#888', fontSize: '1rem' }}>📅</span>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>Joined [date]</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1 }}>
          {/* Stats Cards */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ 
              flex: 1,
              backgroundColor: '#1A1A1A', 
              borderRadius: '12px', 
              padding: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              height: '100px'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '10px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.8rem' }}>🐛</span>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Bugs Found</div>
                <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>0</div>
              </div>
            </div>

            <div style={{ 
              flex: 1,
              backgroundColor: '#1A1A1A', 
              borderRadius: '12px', 
              padding: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              height: '100px'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '10px',
                backgroundColor: 'rgba(0, 191, 165, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.8rem', color: '#00BFA5' }}>✓</span>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Fixed Issues</div>
                <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>0</div>
              </div>
            </div>

            <div style={{ 
              flex: 1,
              backgroundColor: '#1A1A1A', 
              borderRadius: '12px', 
              padding: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              height: '100px'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.8rem' }}>📦</span>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Projects</div>
                <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>0</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '30px',
            marginBottom: '20px',
            height: '300px'
          }}>
            <h6 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Recent Activity</h6>
            
            <div style={{ 
              padding: '65px', 
              textAlign: 'center',
              color: '#666'
            }}>
              No recent activity
            </div>
          </div>

          {/* Current Live Projects */}
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            borderRadius: '12px', 
            padding: '30px',
            height: '300px'
          }}>
            <h6 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Current Live Projects</h6>
            
            <div style={{ 
              padding: '60px', 
              textAlign: 'center',
              color: '#666'
            }}>
              No active projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;