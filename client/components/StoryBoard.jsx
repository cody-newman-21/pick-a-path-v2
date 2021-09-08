import React from 'react'
import { useParams } from 'react-router-dom'
import Button from './Button'
import stories from '../../data/stories'
import Input from './Input'

function StoryBoard () {
  const { id } = useParams()
  const story = stories.stories.find(story => story.id === parseInt(id))

  const navigationStyle = {
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: '30%',
    textTransform: 'uppercase'
  }

  return (
    <div className="story">
      <h2>{story.title}</h2>

      <div className="story-block">
        <img src={`images/${story.image}`} />
        <div className="story-textbox">
          <p>{story.story}</p>
        </div>
      </div>
      <div className='input'>
        <Input />
      </div>
      <div className="navigation" style = {navigationStyle}>
        <Button text={story.buttons[0].label} nextStory={story.buttons[0].outcome} />
        {story.buttons[1] && <Button text={story.buttons[1].label} nextStory={story.buttons[1].outcome} />}
      </div>
    </div>
  )
}

export default StoryBoard
