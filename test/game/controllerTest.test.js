import Controller from '../../game/controller';

const mockReceiveInput = jest.fn();

describe('Controller', () => {
  it('converts a keypress to the correct string', () => {
    const game = { receiveInput: mockReceiveInput };
    const controller = new Controller(game);

    controller.checkKeyPress({ keyCode: '65' });
    controller.checkKeyPress({ keyCode: '37' });

    controller.checkKeyPress({ keyCode: '68' });
    controller.checkKeyPress({ keyCode: '39' });

    controller.checkKeyPress({ keyCode: '87' });
    controller.checkKeyPress({ keyCode: '38' });

    controller.checkKeyPress({ keyCode: '83' });
    controller.checkKeyPress({ keyCode: '40' });

    controller.checkKeyPress({ keyCode: '13' });
    controller.checkKeyPress({ keyCode: '66' });
    controller.checkKeyPress({ keyCode: '67' });
    controller.checkKeyPress({ keyCode: '86' });

    expect(game.receiveInput.mock.calls[0][0]).toBe('left')
    expect(game.receiveInput.mock.calls[1][0]).toBe('left')
    expect(game.receiveInput.mock.calls[2][0]).toBe('right')
    expect(game.receiveInput.mock.calls[3][0]).toBe('right')

    expect(game.receiveInput.mock.calls[4][0]).toBe('up')
    expect(game.receiveInput.mock.calls[5][0]).toBe('up')

    expect(game.receiveInput.mock.calls[6][0]).toBe('down')
    expect(game.receiveInput.mock.calls[7][0]).toBe('down')

    expect(game.receiveInput.mock.calls[8][0]).toBe('A')
    expect(game.receiveInput.mock.calls[9][0]).toBe('B')
    expect(game.receiveInput.mock.calls[10][0]).toBe('start')
    expect(game.receiveInput.mock.calls[11][0]).toBe('select')
  });
});
