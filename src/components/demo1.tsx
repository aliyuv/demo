import React from 'react';
import './global.css'
export default function Demo3(): React.ReactElement {
  return (
    <div>
      {/* 100vh 容器 */}
      <div style={{
        height: '100vh',
        background: 'linear-gradient(to bottom right, #ff85c6, #ffb8c6, #ffc6c6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(75, 85, 99)',
        overflow: 'hidden'
      }}>
        {/* 内容卡片 */}
        <div style={{
          padding: '1.5rem',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          borderRadius: '0.5rem',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          maxWidth: '90%',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            100vh 问题演示
          </h1>
          <p style={{ marginBottom: '1rem' }}>
            在移动端浏览器中,100vh 的计算会包含浏览器的工具栏区域
          </p>
          <p>
            当工具栏显示/隐藏时,会导致内容溢出或布局跳动
          </p>
        </div>
      </div>
    </div>
  )
}