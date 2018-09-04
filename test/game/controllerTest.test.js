import Controller from '../../game/controller';

const mockReceiveInput = jest.fn();

describe('Controller', () => {
  it('converts a keypress to the correct string', () => {
    const game = { receiveInput: mockReceiveInput };
    const controller = new Controller(game);

    controller.checkKeyPress({ keyCode: '65' });
    controller.checkKeyPress({ keyCode: '37' });

    expect(game.receiveInput.mock.calls[0][0]).toBe('left')
    expect(game.receiveInput.mock.calls[1][0]).toBe('left')
  });
});
