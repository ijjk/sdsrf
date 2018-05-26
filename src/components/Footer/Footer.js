import React from 'react'
import fb from '../../imgs/footer/fb.svg'
import ig from '../../imgs/footer/ig.svg'
import twitter from '../../imgs/footer/twitter.svg'
import youtube from '../../imgs/footer/youtube.svg'
import style from './footerStyle'

const formProps = global.netlifyProps || {}
const Field = ({ placeholder, label, textarea, maxLength, name, type }) => {
  const props = {
    placeholder: placeholder || label,
    required: true,
    key: name + 2,
    maxLength,
    id: name,
    name,
  }
  return [
    <label htmlFor={name} key={name + 1}>
      {label + ' '}
    </label>,
    textarea ? (
      <textarea {...props} />
    ) : (
      <input {...props} type={type || 'text'} />
    ),
  ]
}
const Footer = () => (
  <footer css={style}>
    <div className="content discl">
      <h6>Content disclaimer</h6>
      <p>
        The information and resources provided in this website are not a
        substitute for professional medical advice, treatment, nor services. The
        information and resources provided through this website were made by
        families, for families, affected by SDS. We are not medical clinicians.
        By accessing and using this website, you agree that SDS Research Fund
        bears no responsibility for any consequences that may result from
        information acquired through this site.
      </p>
    </div>

    <div className="content contact">
      <h6>Contact us</h6>

      <form name="contact" method="post" {...formProps}>
        <input type="hidden" name="form-name" value="contact" />
        <input name="somefield" type="text" className="somefield" />
        <Field
          placeholder="Your name e.g. John Deux"
          label="Your name"
          maxLength="128"
          name="name"
        />
        <Field
          placeholder="Your email e.g. John@gmail.com"
          label="You email"
          maxLength="256"
          type="email"
          name="email"
        />
        <Field
          placeholder="Your message..."
          label="Your Message"
          maxLength="2048"
          name="message"
          textarea
        />
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>

    <div className="content-full fTxt">
      <div className="note">
        <p>
          Shwachman Diamond Syndrome Research Fund is a non-profit federal
          tax-exempt organization under section 501(c)(3) of the Internal
          Revenue Code, EIN 82-0939237.
        </p>
      </div>

      <div className="brand">
        <div css={{ width: '100%' }}>
          {[
            ['//facebook.com/sdsresearchfund', fb, 'facebook'],
            ['//twitter.com/SDSResearchFund', twitter, 'twitter'],
            ['//instagram.com/sdsresearchfund', ig, 'instagram'],
            [
              '//youtube.com/channel/UCukPhw39YRuIPYbqKtE-12Q/',
              youtube,
              'youtube',
            ],
          ].map(item => (
            <a
              href={item[0]}
              key={item[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item[1]} alt={item[2] + 'logo'} />
            </a>
          ))}
        </div>
        <div>Shwachman Diamond Syndrome Research Fund</div>
      </div>
    </div>
  </footer>
)

export default Footer
