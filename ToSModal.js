function ToSModal({ onClose }) {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="about-content">
          <h2>Terms of Service</h2>
          
          <div className="about-section">
            <h3>Code of Conduct</h3>
            <p>
              By contributing to or using Critical Realism Wiki, you agree to:
            </p>
            <ul>
              <li>Provide evidence-based, factually-grounded analysis</li>
              <li>Prohibit hate speech, bigotry, calls for violence, and content promoting harm</li>
              <li>Avoid fatalistic, misanthropic, or self-pitying language</li>
              <li>Respect complexity and acknowledge both systemic problems and pathways for change</li>
              <li>Cite all claims with reputable sources</li>
              <li>Engage in good faith with intellectual honesty</li>
            </ul>
          </div>

          <div className="about-section">
            <h3>Moderation Rights</h3>
            <p>
              The project maintainers reserve the right to:
            </p>
            <ul>
              <li>Edit, modify, or remove any content that violates the Code of Conduct</li>
              <li>Mark content as requiring review or revision</li>
              <li>Pause new article creation or editing if malicious activity is detected</li>
              <li>Revert to pre-vetted editing mode during periods of coordinated abuse</li>
              <li>Permanently remove users who repeatedly violate community standards</li>
            </ul>
            <p>
              All moderation decisions are made based on the evidence and alignment with 
              our mission of rigorous, balanced systemic analysis.
            </p>
          </div>

          <div className="about-section">
            <h3>Content Reporting</h3>
            <p>
              If you encounter content that violates the Code of Conduct, use the "Report" 
              button on any article to flag it for review. Reports should include:
            </p>
            <ul>
              <li>The specific violation (hate speech, fatalism, unsourced claims, etc.)</li>
              <li>Why the content violates our standards</li>
            </ul>
            <p>
              All reports are reviewed by maintainers. Frivolous or bad-faith reports may 
              result in reporting privileges being revoked.
            </p>
          </div>

          <div className="about-section">
            <h3>Backup & Emergency Protocols</h3>
            <p>
              In the event of malicious content flooding or coordinated attempts to 
              undermine the wiki's mission, we will:
            </p>
            <ul>
              <li><strong>Phase 1:</strong> Increase review frequency and mark suspicious content</li>
              <li><strong>Phase 2:</strong> Pause new article creation for non-vetted users</li>
              <li><strong>Phase 3:</strong> Revert to invite-only or pre-approved editing mode</li>
              <li><strong>Phase 4:</strong> Restore from backup and rebuild with stricter controls</li>
            </ul>
            <p>
              Regular backups are maintained to preserve legitimate content.
            </p>
          </div>

          <div className="about-section">
            <h3>Limitation of Liability</h3>
            <p>
              Critical Realism Wiki is provided "as is" for educational and analytical 
              purposes. While we strive for accuracy and balance:
            </p>
            <ul>
              <li>We make no guarantees about the completeness or accuracy of any content</li>
              <li>Articles represent analytical perspectives, not absolute truth</li>
              <li>We are not responsible for actions taken based on wiki content</li>
              <li>Users engage with content at their own discretion and risk</li>
            </ul>
            <p>
              If you're experiencing mental health difficulties, please seek professional 
              support through the resources listed in our About section.
            </p>
          </div>

          <div className="about-section">
            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to update these Terms of Service as the project evolves. 
              Continued use of the platform constitutes acceptance of updated terms.
            </p>
          </div>

          <div className="about-section">
            <h3>Contact</h3>
            <p>
              For questions about these terms or to report serious violations, contact 
              the project maintainers through the reporting system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}