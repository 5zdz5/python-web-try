const o=`import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">Python Quest</span>
          </Link>
          <p className="footer-tagline">通过游戏化学习，从零到英雄掌握Python编程</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>关于我们</h4>
            <ul>
              <li><a href="#">课程介绍</a></li>
              <li><a href="#">团队成员</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>学习资源</h4>
            <ul>
              <li><a href="#">学习路径</a></li>
              <li><a href="#">文档中心</a></li>
              <li><a href="#">常见问题</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>社区</h4>
            <ul>
              <li><a href="#">排行榜</a></li>
              <li><a href="#">讨论区</a></li>
              <li><a href="#">合作伙伴</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Python Quest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
`;export{o as default};
