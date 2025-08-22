import React, { useState } from "react";

function Login({ onLoginAsTester, onLoginAsDeveloper }) {
  const [activeTab, setActiveTab] = useState('login');
  const [accountType, setAccountType] = useState('tester');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Left Panel */}
      <div style={{ 
        width: '40%', 
        backgroundColor: '#0E1420',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        color: 'white'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '20px' }}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" stroke="#00D4FF" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="50" r="25" stroke="#00FF88" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="30" r="5" fill="#00D4FF"/>
            <path d="M 35 50 L 65 50" stroke="#00FF88" strokeWidth="2"/>
            <path d="M 50 35 L 50 65" stroke="#00D4FF" strokeWidth="2"/>
          </svg>
        </div>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          marginBottom: '10px',
          letterSpacing: '2px'
        }}>
          TEST<br/>QUEST
        </h1>
        
        <p style={{ 
          fontSize: '1rem', 
          marginBottom: '50px',
          opacity: 0.9,
          textAlign: 'center'
        }}>
          Secure the digital world, one bug at a time
        </p>

        <div style={{ width: '100%', maxWidth: '350px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ marginRight: '15px', fontSize: '20px' }}>🛡️</span>
            <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Enterprise-grade security testing</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ marginRight: '15px', fontSize: '20px' }}>👥</span>
            <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Connect with top security researchers</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '15px', fontSize: '20px' }}>🏆</span>
            <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Competitive rewards and recognition</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={{ 
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <div style={{ width: '100%', maxWidth: '450px' }}>
          {/* Tab Buttons */}
          <div style={{ display: 'flex', marginBottom: '40px', justifyContent: 'center' }}>
            <button
              onClick={() => setActiveTab('login')}
              style={{
                padding: '10px 30px',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'login' ? '2px solid #7C3AED' : '2px solid transparent',
                color: activeTab === 'login' ? '#333' : '#999',
                fontSize: '1rem',
                fontWeight: activeTab === 'login' ? '600' : '400',
                cursor: 'pointer',
                marginRight: '40px',
                transition: 'all 0.3s'
              }}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              style={{
                padding: '10px 30px',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'signup' ? '2px solid #7C3AED' : '2px solid transparent',
                color: activeTab === 'signup' ? '#333' : '#999',
                fontSize: '1rem',
                fontWeight: activeTab === 'signup' ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Sign Up
            </button>
          </div>

          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '10px',
            color: '#333'
          }}>
            Welcome back
          </h2>
          
          <p style={{ 
            textAlign: 'center',
            color: '#666',
            marginBottom: '30px',
            fontSize: '0.95rem'
          }}>
            Choose your account type to continue
          </p>

          {/* Account Type Selection */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
            <button
              onClick={() => setAccountType('tester')}
              style={{
                flex: 1,
                padding: '15px',
                backgroundColor: accountType === 'tester' ? '#F3F0FF' : 'white',
                border: accountType === 'tester' ? '2px solid #7C3AED' : '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🔍</span>
              <span style={{ 
                fontWeight: '600',
                color: accountType === 'tester' ? '#7C3AED' : '#666'
              }}>
                Tester
              </span>
              <span style={{ fontSize: '0.8rem', color: '#999' }}>Find and report bugs</span>
            </button>
            
            <button
              onClick={() => setAccountType('developer')}
              style={{
                flex: 1,
                padding: '15px',
                backgroundColor: accountType === 'developer' ? '#F3F0FF' : 'white',
                border: accountType === 'developer' ? '2px solid #7C3AED' : '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{'</>'}</span>
              <span style={{ 
                fontWeight: '600',
                color: accountType === 'developer' ? '#7C3AED' : '#666'
              }}>
                Developer
              </span>
              <span style={{ fontSize: '0.8rem', color: '#999' }}>Secure your apps</span>
            </button>
          </div>

          {/* Form Fields */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontSize: '0.9rem',
              color: '#666',
              fontWeight: '500'
            }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#7C3AED'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontSize: '0.9rem',
              color: '#666',
              fontWeight: '500'
            }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#7C3AED'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px'
          }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: '#666'
            }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginRight: '8px', cursor: 'pointer' }}
              />
              Remember me
            </label>
            <a href="#" style={{ 
              color: '#7C3AED',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            onClick={() => accountType === 'tester' ? onLoginAsTester() : onLoginAsDeveloper()}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#7C3AED',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              marginBottom: '20px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#6B2FD6'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#7C3AED'}
          >
            Sign In
          </button>

          {/* Or Continue With */}
          <div style={{ 
            textAlign: 'center',
            color: '#999',
            fontSize: '0.9rem',
            marginBottom: '20px'
          }}>
            Or continue with
          </div>

          {/* Social Login Buttons */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{
              flex: 1,
              padding: '12px',
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2rem',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              G
            </button>
            
            <button style={{
              flex: 1,
              padding: '12px',
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2rem',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#333">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;